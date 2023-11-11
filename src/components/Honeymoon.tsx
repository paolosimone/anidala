import { useTheme } from "@/hooks";
import classNames from "classnames";

export type HoneymoonProps = Props<{
  id: string;
}>;

export function Honeymoon({ id }: HoneymoonProps): JSX.Element {
  const [{ fonts }] = useTheme();
  return (
    <div id={id} className="flex flex-col mx-2">
      <h1
        className={classNames(
          "self-center text-4xl text-primary",
          fonts.heading,
        )}
      >
        <b>Honeymoon</b>
      </h1>

      <p className={classNames("mx-8 mt-4 text-center", fonts.paragraph)}>
        We can&apos;t wait to leave our duties behind and finally take some time
        for ourselves!
      </p>

      <div className="flex flex-wrap justify-evenly gap-4 mt-4 mb-2">
        <Card title="From Naboo" image="travel-1.jpg">
          Right after the ceremony we will retire to Naboo&apos;s remote Lake
          Country, best known for its breathtaking landscapes, with picturesque
          lakes, rolling hills, and beautiful meadows.
          <br />
          <br />A welcome escape from the chaos of the galaxy, a brief moment of
          serenity and joy.
        </Card>

        <Card title="By Coruscant" image="travel-2.jpg">
          Coruscant has a certain energy that&apos;s both invigorating and
          romantic. Perhaps we&apos;ll visit the opera or take a speeder ride
          through the city lights...
          <br />
          <br />
          Also, it&apos;s not like we could have go to Scarif beach resort,
          since *someone*{" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=2tLf1JO5bvE"
            target="_blank"
          >
            doesn&apos;t like sand
          </a>
        </Card>

        <Card title="To Mustafar" image="travel-3.jpg">
          While Mustafar may not be everyone&apos;s idea of a romantic getaway,
          for us, it&apos;s a place of renewal and rebirth. There&apos;s a
          strange sort of tranquility in the constant rumble of the planet.
          <br />
          <br />
          We&apos;re forging new memories here, turning a page on the past and
          embracing the future, no matter where it takes us.
        </Card>
      </div>
    </div>
  );
}

type CardProps = Props<{
  title: string;
  image: string;
}>;

function Card(props: CardProps): JSX.Element {
  const [{ fonts }] = useTheme();

  return (
    <div
      className={classNames(
        "bg-cover bg-center bg-no-repeat flex rounded-md drop-shadow-lg max-w-xs min-h-[400px]",
        props.className,
      )}
      style={{ backgroundImage: `url(images/${props.image})` }}
    >
      <div
        className={classNames(
          "flex flex-col items-center py-2 px-4 text-overlay bg-black/50 rounded-md",
        )}
      >
        <h2 className={classNames("my-2 text-2xl", fonts.heading)}>
          {props.title}
        </h2>

        <div
          className={classNames("my-2 mx-4 grow text-justify", fonts.paragraph)}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
