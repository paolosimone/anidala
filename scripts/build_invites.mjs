import QRCode from "qrcode";
import * as fs from "node:fs";
import * as path from "node:path";
import { createCanvas, registerFont } from "canvas";
import model from "../src/components/Invite/Model.js";

const INVITES_FOLDER = "invites";

const FONT_REGULAR = "Exo 2";
const FONT_TITLE = "Audiowide";

const INVITE_COLOR = "#006510";

// sudo apt install fontconfig
registerFont("scripts/exo_2.ttf", { family: FONT_REGULAR });
registerFont("scripts/audiowide.ttf", { family: FONT_TITLE });

async function main() {
  fs.mkdirSync(INVITES_FOLDER, { recursive: true });

  const guests = fetchGuests();
  for (const invite of groupGuestsToInvites(guests)) {
    console.log(`Inviting ${invite.group} - #guests: ${invite.guests.length}`);
    await saveInvite(invite);
  }
  console.log(`Done! Invites written to: ${INVITES_FOLDER}`);
}

// want to read the guest list from a Google Sheet?
// have a look at https://github.com/paolosimone/gsg-template
function fetchGuests() {
  return [
    {
      id: "1",
      group: "Jedi",
      name: "Obi-Wan Kenobi",
      avatar:
        "https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=Heather&clotheType=GraphicShirt&eyeType=Squint&eyebrowType=Default&facialHairColor=Blonde&facialHairType=BeardMedium&graphicType=Resist&hairColor=Blonde&mouthType=Smile&skinColor=Light&topType=ShortHairShaggyMullet",
    },
    {
      id: "2",
      group: "Jedi",
      name: "Mace Windu",
      avatar:
        "https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=PastelOrange&clotheType=BlazerShirt&eyeType=Default&eyebrowType=FlatNatural&facialHairType=Blank&graphicType=Bear&hairColor=BrownDark&mouthType=Serious&skinColor=Black&topType=NoHair",
    },
  ];
}

function groupGuestsToInvites(guests) {
  const grouped = guests.reduce((groups, guest) => {
    groups[guest.group] = groups[guest.group] || [];
    groups[guest.group].push(guest);
    return groups;
  }, {});

  return Object.entries(grouped).map(([group, groupGuests]) =>
    model.Invite.fromObject({
      group: group,
      guests: groupGuests.map(parseAvatar).map(model.Guest.fromObject),
    }),
  );
}

function parseAvatar(guest) {
  if (!guest.avatar) {
    return guest;
  }

  const avatarOptions = guest.avatar
    .substr(guest.avatar.indexOf("?") + 1)
    .replace(/[^a-zA-Z0-9=&]/g, "")
    .split("&")
    .map((pair) => pair.split("="));

  return { ...guest, avatar: Object.fromEntries(avatarOptions) };
}

async function saveInvite(invite) {
  let canvas = await createInvite(invite);
  let buffer = canvas.toBuffer("image/png");

  // remove accents: https://stackoverflow.com/a/37511463
  let basename = invite.group
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "_");
  let outPath = path.join(INVITES_FOLDER, `${basename}.png`);

  fs.writeFileSync(outPath, buffer);
}

async function createInvite(invite) {
  const [width, height] = [300, 400];

  const canvas = createCanvas(width, height);
  let ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  // frame
  const framePadding = 6;
  const frameRadius = 8;
  const frameThick = 8;
  const qrSize = width - 2 * (framePadding + frameThick);
  const [qrX, qrY] = [framePadding + frameThick, height * 0.5 - qrSize / 2];
  const [frameX, frameY, frameWidth, frameHeight] = [
    0,
    0,
    width,
    qrY + qrSize + frameThick + framePadding,
  ];
  ctx.fillStyle = INVITE_COLOR;
  ctx.beginPath();
  ctx.roundRect(
    framePadding,
    framePadding,
    frameWidth - 2 * framePadding,
    frameHeight - 2 * framePadding,
    frameRadius,
  );
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.roundRect(qrX, qrY, qrSize, qrSize, frameRadius);
  ctx.fill();

  // header
  const [headerX, headerY, headerWidth, headerHeight] = [
    framePadding,
    framePadding,
    frameWidth - 2 * framePadding,
    qrY - framePadding,
  ];
  const headerPadding = 6;
  ctx.fillStyle = "white";
  fillTextCenter(
    ctx,
    invite.group,
    FONT_TITLE,
    headerX + headerPadding,
    headerY + headerPadding,
    headerWidth - 2 * headerPadding,
    headerHeight - 2 * headerPadding,
  );

  // qrcode
  const qrPadding = 6;
  const qrCode = await createQRCode(invite, qrSize, INVITE_COLOR);
  ctx.drawImage(
    qrCode,
    qrX + qrPadding,
    qrY + qrPadding,
    qrSize - 2 * qrPadding,
    qrSize - 2 * qrPadding,
  );

  // logo
  const [qrCenterX, qrCenterY] = [width / 2, height / 2];
  const logoRadius = qrSize / 8;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(qrCenterX, qrCenterY, logoRadius, 0, 2 * Math.PI);
  ctx.fill();
  const innerLogoRadius = logoRadius - 3;
  ctx.fillStyle = INVITE_COLOR;
  ctx.beginPath();
  ctx.arc(qrCenterX, qrCenterY, innerLogoRadius, 0, 2 * Math.PI);
  ctx.fill();
  const logoSize = 2 * innerLogoRadius * 0.8;
  ctx.fillStyle = "white";
  fillTextCenter(
    ctx,
    "PA",
    FONT_TITLE,
    qrCenterX - logoSize / 2,
    qrCenterY - logoSize / 2,
    logoSize,
    logoSize,
  );

  // footer
  ctx.fillStyle = INVITE_COLOR;
  const footerPadding = 4;
  const [footerX, footerY, footerWidth, footerHeight] = [
    0,
    frameY + frameHeight,
    width,
    height - frameHeight,
  ];
  const footerLineHeight = footerHeight;
  const footerLineSpacing = 10;
  fillTextCenter(
    ctx,
    "Will you join?",
    FONT_REGULAR,
    footerX + footerPadding,
    footerY + footerPadding,
    footerWidth - 2 * footerPadding,
    footerLineHeight - footerPadding - footerLineSpacing,
  );

  return canvas;
}

function fillTextCenter(ctx, text, fontFamily, x, y, width, height) {
  ctx.font = fitFont(text, fontFamily, width, height);
  const metrics = textMetrics(ctx, text);
  ctx.fillText(
    text,
    x + width / 2 - metrics.width / 2,
    y + height / 2 + metrics.height / 2 - metrics.actualBoundingBoxDescent,
  );
}

function fitFont(text, fontFamily, width, height) {
  let ctx = createCanvas(width, height).getContext("2d");

  // O(60) is same as O(1), amirite?
  let fontSize = 60;
  let metrics = { width, height };
  do {
    ctx.font = `${fontSize}px ${fontFamily}`;
    metrics = textMetrics(ctx, text);
    fontSize--;
  } while (metrics.width > width || metrics.height > height);

  return ctx.font;
}

function textMetrics(ctx, text) {
  const metrics = ctx.measureText(text);
  return {
    ...metrics,
    height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
  };
}

async function createQRCode(invite, size, color) {
  const data = model.Invite.encode(invite).finish();
  const payload = Buffer.from(data).toString("base64");

  const canvas = createCanvas(size, size);
  return await QRCode.toCanvas(canvas, payload, {
    width: size,
    margin: 0,
    errorCorrectionLevel: "H",
    color: { dark: color },
  });
}

await main();
