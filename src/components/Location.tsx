import { Icon } from "@/components";
import { useTheme } from "@/hooks";
import classNames from "classnames";

export type LocationProps = Props<{
  id: string;
}>;

export function Location({ id }: LocationProps): JSX.Element {
  const [{ fonts }] = useTheme();
  return (
    <div id={id} className="flex flex-col">
      <h1
        className={classNames(
          "self-center text-4xl text-primary",
          fonts.heading,
        )}
      >
        <b>Location</b>
      </h1>

      <div className={classNames("mx-6 mt-4 text-center", fonts.paragraph)}>
        <p className="mb-4">
          Join us in the embrace of nature&apos;s beauty, surrounded by the
          tranquil lakes and rolling hills of Naboo, as we exchange vows of love
          and commitment. Your company will make this celebration truly
          complete.
        </p>
      </div>

      <LocationDetails
        className="mt-4 min-h-[45vh] justify-start bg-right"
        title="Ceremony"
        location="Varykino Villa"
        date="ǹ̸͔õ̴̱ṫ̵̙ ̴͉̏f̵̹̈o̸̖̔u̵̲̾n̸̯̅d̷̝̉"
        time="t̵͍́h̴͚́e̴̹͝ ̶̱͘a̴̖̋r̷̻͛c̴̖̈ȟ̶̜ì̵̺v̵̟̇ë̸̩́s̶͈̃ ̶͓̑a̸͉͒ŕ̷̮ḛ̴͝ ̵̼͂ỉ̷͖n̵̏ͅc̷͈̒o̵̙̊ḿ̴̡p̴̡̎l̶͖͋ė̸̢t̶̝̀e̴̦͊"
        address="Lake Country, Naboo"
        image="location.jpg"
      />
    </div>
  );
}

type LocationDetailsProps = Props<{
  title: string;
  location: string;
  date: string;
  time: string;
  address: string;
  image: string;
}>;

function LocationDetails(props: LocationDetailsProps): JSX.Element {
  const [{ fonts }] = useTheme();

  return (
    <div
      className={classNames(
        "bg-cover bg-no-repeat flex drop-shadow-lg",
        props.className,
      )}
      style={{ backgroundImage: `url(images/${props.image})` }}
    >
      <div
        className={classNames(
          "flex flex-col items-center py-8 px-4 gap-y-6 text-overlay bg-black/50 grow md:grow-0",
        )}
        style={{ minWidth: "30%" }}
      >
        <h2 className={classNames("text-2xl", fonts.heading)}>{props.title}</h2>

        <p
          className={classNames(
            "grow flex flex-col justify-center text-2xl md:text-3xl",
            fonts.heading,
          )}
        >
          <b>{props.location}</b>
        </p>

        <div
          className="grid self-stretch place-items-center gap-x-2 gap-y-4 px-6"
          style={{ gridTemplateColumns: "1fr 4fr" }}
        >
          <LocationIcon icon={Icon.Event} />
          <p className="text-center">{props.date}</p>

          <LocationIcon icon={Icon.Schedule} />
          <p className="text-center">{props.time}</p>

          <LocationIcon icon={Icon.PinDrop} />
          <p className="text-center">{props.address}</p>
        </div>
      </div>
    </div>
  );
}

type LocationIconProps = Props<{
  icon: Icon.Type;
}>;

function LocationIcon({
  className,
  icon: LabelIcon,
}: LocationIconProps): JSX.Element {
  return (
    <label className={classNames("h-8 w-8 p-0.5 fill-overlay", className)}>
      <LabelIcon />
    </label>
  );
}
