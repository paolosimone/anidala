import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an Invite. */
export interface IInvite {
  /** Invite group */
  group?: string | null;

  /** Invite guests */
  guests?: IGuest[] | null;
}

/** Represents an Invite. */
export class Invite implements IInvite {
  /**
   * Constructs a new Invite.
   * @param [properties] Properties to set
   */
  constructor(properties?: IInvite);

  /** Invite group. */
  public group: string;

  /** Invite guests. */
  public guests: IGuest[];

  /**
   * Creates a new Invite instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Invite instance
   */
  public static create(properties?: IInvite): Invite;

  /**
   * Encodes the specified Invite message. Does not implicitly {@link Invite.verify|verify} messages.
   * @param message Invite message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IInvite,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Encodes the specified Invite message, length delimited. Does not implicitly {@link Invite.verify|verify} messages.
   * @param message Invite message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IInvite,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Decodes an Invite message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Invite
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number,
  ): Invite;

  /**
   * Decodes an Invite message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Invite
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Invite;

  /**
   * Verifies an Invite message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates an Invite message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Invite
   */
  public static fromObject(object: { [k: string]: any }): Invite;

  /**
   * Creates a plain object from an Invite message. Also converts values to other types if specified.
   * @param message Invite
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Invite,
    options?: $protobuf.IConversionOptions,
  ): { [k: string]: any };

  /**
   * Converts this Invite to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };

  /**
   * Gets the default type url for Invite
   * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns The default type url
   */
  public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Guest. */
export interface IGuest {
  /** Guest id */
  id?: string | null;

  /** Guest name */
  name?: string | null;

  /** Guest avatar */
  avatar?: IAvatar | null;
}

/** Represents a Guest. */
export class Guest implements IGuest {
  /**
   * Constructs a new Guest.
   * @param [properties] Properties to set
   */
  constructor(properties?: IGuest);

  /** Guest id. */
  public id: string;

  /** Guest name. */
  public name: string;

  /** Guest avatar. */
  public avatar?: IAvatar | null;

  /** Guest _avatar. */
  public _avatar?: "avatar";

  /**
   * Creates a new Guest instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Guest instance
   */
  public static create(properties?: IGuest): Guest;

  /**
   * Encodes the specified Guest message. Does not implicitly {@link Guest.verify|verify} messages.
   * @param message Guest message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IGuest,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Encodes the specified Guest message, length delimited. Does not implicitly {@link Guest.verify|verify} messages.
   * @param message Guest message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IGuest,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Decodes a Guest message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Guest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number,
  ): Guest;

  /**
   * Decodes a Guest message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Guest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Guest;

  /**
   * Verifies a Guest message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates a Guest message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Guest
   */
  public static fromObject(object: { [k: string]: any }): Guest;

  /**
   * Creates a plain object from a Guest message. Also converts values to other types if specified.
   * @param message Guest
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Guest,
    options?: $protobuf.IConversionOptions,
  ): { [k: string]: any };

  /**
   * Converts this Guest to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };

  /**
   * Gets the default type url for Guest
   * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns The default type url
   */
  public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Avatar. */
export interface IAvatar {
  /** Avatar skinColor */
  skinColor?: SkinColor | null;

  /** Avatar topType */
  topType?: Top | null;

  /** Avatar hairColor */
  hairColor?: HairColor | null;

  /** Avatar hatColor */
  hatColor?: HatColor | null;

  /** Avatar accessoriesType */
  accessoriesType?: Accessories | null;

  /** Avatar facialHairType */
  facialHairType?: FacialHair | null;

  /** Avatar facialHairColor */
  facialHairColor?: FacialHairColor | null;

  /** Avatar clotheType */
  clotheType?: Clothe | null;

  /** Avatar clotheColor */
  clotheColor?: ClotheColor | null;

  /** Avatar graphicType */
  graphicType?: ClotheGraphic | null;

  /** Avatar eyeType */
  eyeType?: Eye | null;

  /** Avatar eyebrowType */
  eyebrowType?: Eyebrow | null;

  /** Avatar mouthType */
  mouthType?: Mouth | null;
}

/** Represents an Avatar. */
export class Avatar implements IAvatar {
  /**
   * Constructs a new Avatar.
   * @param [properties] Properties to set
   */
  constructor(properties?: IAvatar);

  /** Avatar skinColor. */
  public skinColor: SkinColor;

  /** Avatar topType. */
  public topType: Top;

  /** Avatar hairColor. */
  public hairColor: HairColor;

  /** Avatar hatColor. */
  public hatColor: HatColor;

  /** Avatar accessoriesType. */
  public accessoriesType: Accessories;

  /** Avatar facialHairType. */
  public facialHairType: FacialHair;

  /** Avatar facialHairColor. */
  public facialHairColor: FacialHairColor;

  /** Avatar clotheType. */
  public clotheType: Clothe;

  /** Avatar clotheColor. */
  public clotheColor: ClotheColor;

  /** Avatar graphicType. */
  public graphicType: ClotheGraphic;

  /** Avatar eyeType. */
  public eyeType: Eye;

  /** Avatar eyebrowType. */
  public eyebrowType: Eyebrow;

  /** Avatar mouthType. */
  public mouthType: Mouth;

  /**
   * Creates a new Avatar instance using the specified properties.
   * @param [properties] Properties to set
   * @returns Avatar instance
   */
  public static create(properties?: IAvatar): Avatar;

  /**
   * Encodes the specified Avatar message. Does not implicitly {@link Avatar.verify|verify} messages.
   * @param message Avatar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IAvatar,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Encodes the specified Avatar message, length delimited. Does not implicitly {@link Avatar.verify|verify} messages.
   * @param message Avatar message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IAvatar,
    writer?: $protobuf.Writer,
  ): $protobuf.Writer;

  /**
   * Decodes an Avatar message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns Avatar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number,
  ): Avatar;

  /**
   * Decodes an Avatar message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns Avatar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Avatar;

  /**
   * Verifies an Avatar message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns Avatar
   */
  public static fromObject(object: { [k: string]: any }): Avatar;

  /**
   * Creates a plain object from an Avatar message. Also converts values to other types if specified.
   * @param message Avatar
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: Avatar,
    options?: $protobuf.IConversionOptions,
  ): { [k: string]: any };

  /**
   * Converts this Avatar to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };

  /**
   * Gets the default type url for Avatar
   * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns The default type url
   */
  public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** SkinColor enum. */
export enum SkinColor {
  Light = 0,
  Yellow = 1,
  Pale = 2,
  Tanned = 3,
  Brown = 4,
  Darkbrown = 5,
  Black = 6,
}

/** Clothe enum. */
export enum Clothe {
  BlazerShirt = 0,
  BlazerSweater = 1,
  CollarSweater = 2,
  GraphicShirt = 3,
  Hoodie = 4,
  Overall = 5,
  ShirtCrewNeck = 6,
  ShirtScoopNeck = 7,
  ShirtVNeck = 8,
}

/** ClotheColor enum. */
export enum ClotheColor {
  Black = 0,
  Blue01 = 1,
  Blue02 = 2,
  Blue03 = 3,
  Gray01 = 4,
  Gray02 = 5,
  Heather = 6,
  PastelBlue = 7,
  PastelGreen = 8,
  PastelOrange = 9,
  PastelRed = 10,
  PastelYellow = 11,
  Pink = 12,
  Red = 13,
  White = 14,
}

/** ClotheGraphic enum. */
export enum ClotheGraphic {
  Bat = 0,
  Cumbia = 1,
  Deer = 2,
  Diamond = 3,
  Hola = 4,
  Pizza = 5,
  Resist = 6,
  Selena = 7,
  Bear = 8,
  SkullOutline = 9,
  Skull = 10,
}

/** Eyebrow enum. */
export enum Eyebrow {
  Default = 0,
  Angry = 1,
  AngryNatural = 2,
  DefaultNatural = 3,
  FlatNatural = 4,
  RaisedExcited = 5,
  RaisedExcitedNatural = 6,
  SadConcerned = 7,
  SadConcernedNatural = 8,
  UnibrowNatural = 9,
  UpDown = 10,
  UpDownNatural = 11,
}

/** Eye enum. */
export enum Eye {
  Default = 0,
  Close = 1,
  Cry = 2,
  Dizzy = 3,
  EyeRoll = 4,
  Happy = 5,
  Hearts = 6,
  Side = 7,
  Squint = 8,
  Surprised = 9,
  Wink = 10,
  WinkWacky = 11,
}

/** Mouth enum. */
export enum Mouth {
  Default = 0,
  Concerned = 1,
  Disbelief = 2,
  Eating = 3,
  Grimace = 4,
  Sad = 5,
  ScreamOpen = 6,
  Serious = 7,
  Smile = 8,
  Tongue = 9,
  Twinkle = 10,
  Vomit = 11,
}

/** Top enum. */
export enum Top {
  NoHair = 0,
  Eyepatch = 1,
  Hat = 2,
  Hijab = 3,
  Turban = 4,
  WinterHat1 = 5,
  WinterHat2 = 6,
  WinterHat3 = 7,
  WinterHat4 = 8,
  LongHairBigHair = 9,
  LongHairBob = 10,
  LongHairBun = 11,
  LongHairCurly = 12,
  LongHairCurvy = 13,
  LongHairDreads = 14,
  LongHairFrida = 15,
  LongHairFro = 16,
  LongHairFroBand = 17,
  LongHairNotTooLong = 18,
  LongHairShavedSides = 19,
  LongHairMiaWallace = 20,
  LongHairStraight = 21,
  LongHairStraight2 = 22,
  LongHairStraightStrand = 23,
  ShortHairDreads01 = 24,
  ShortHairDreads02 = 25,
  ShortHairFrizzle = 26,
  ShortHairShaggyMullet = 27,
  ShortHairShortCurly = 28,
  ShortHairShortFlat = 29,
  ShortHairShortRound = 30,
  ShortHairShortWaved = 31,
  ShortHairSides = 32,
  ShortHairTheCaesar = 33,
  ShortHairTheCaesarSidePart = 34,
}

/** HairColor enum. */
export enum HairColor {
  Auburn = 0,
  Black = 1,
  Blonde = 2,
  BlondeGolden = 3,
  Brown = 4,
  BrownDark = 5,
  PastelPink = 6,
  Blue = 7,
  Platinum = 8,
  Red = 9,
  SilverGray = 10,
}

/** HatColor enum. */
export enum HatColor {
  Black = 0,
  Blue01 = 1,
  Blue02 = 2,
  Blue03 = 3,
  Gray01 = 4,
  Gray02 = 5,
  Heather = 6,
  PastelBlue = 7,
  PastelGreen = 8,
  PastelOrange = 9,
  PastelRed = 10,
  PastelYellow = 11,
  Pink = 12,
  Red = 13,
  White = 14,
}

/** Accessories enum. */
export enum Accessories {
  Blank = 0,
  Kurt = 1,
  Prescription01 = 2,
  Prescription02 = 3,
  Round = 4,
  Sunglasses = 5,
  Wayfarers = 6,
}

/** FacialHair enum. */
export enum FacialHair {
  Blank = 0,
  BeardMedium = 1,
  BeardLight = 2,
  BeardMajestic = 3,
  MoustacheFancy = 4,
  MoustacheMagnum = 5,
}

/** FacialHairColor enum. */
export enum FacialHairColor {
  Auburn = 0,
  Black = 1,
  Blonde = 2,
  BlondeGolden = 3,
  Brown = 4,
  BrownDark = 5,
  Platinum = 6,
  Red = 7,
}
