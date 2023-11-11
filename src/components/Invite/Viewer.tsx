import classNames from "classnames";
import { Invite, Guest } from "./Model";
import { useTheme, Browser, useBrowser } from "@/hooks";
import { GuestCard, GuestState } from "./GuestCard";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Ref, forwardRef, useEffect, useMemo, useRef } from "react";
import { SwiperOptions } from "swiper/types";

export type ViewerProps = Props<{
  invite: Invite;
  onAllReplied: () => void;
}>;

export function Viewer({ className, invite, onAllReplied }: ViewerProps) {
  const [{ fonts, colors }] = useTheme();

  useEffect(() => {
    const root: Nullable<HTMLElement> = document.querySelector(":root");
    root?.style.setProperty("--swiper-theme-color", colors.primary);
    root?.style.setProperty("--swiper-pagination-bottom", "0.5rem");
    root?.style.setProperty(
      "--swiper-pagination-fraction-color",
      colors.foreground,
    );
  }, [colors.primary, colors.foreground]);

  const swiperRef = useRef<Nullable<SwiperRef>>(null);
  const replyCounter = useRef(new ReplyCounter(invite));

  const browser = useBrowser();
  if (browser === undefined) {
    return <div />;
  }

  function handleStateUpdate(guestIndex: number, newState: GuestState) {
    const replied = [GuestState.Confirmed, GuestState.Rejected].includes(
      newState,
    );
    replyCounter.current?.setReplied(guestIndex, replied);
    const next = replyCounter.current?.nextToReply(guestIndex);
    if (next === null) {
      onAllReplied();
      return;
    }
    if (next != guestIndex) {
      swiperRef.current?.swiper.slideTo(next);
    }
  }

  return (
    <GuestSwiper
      ref={swiperRef}
      className={classNames("rounded-lg", fonts.paragraph, className)}
      enablePagination={invite.guests.length > 1}
      type={browser == Browser.Safari ? "static" : "cards"}
    >
      {invite.guests.map((guest, index) => (
        <SwiperSlide key={guest.id} className="bg-white rounded-lg">
          <GuestCard
            guest={guest as Guest}
            onStateUpdate={(state) => handleStateUpdate(index, state)}
          />
        </SwiperSlide>
      ))}
    </GuestSwiper>
  );
}

type GuestSwiperProps = Props<{
  enablePagination: boolean;
  type: "static" | "cards";
}>;

const GuestSwiper = forwardRef<SwiperRef, GuestSwiperProps>(
  function GuestSwiper(
    { className, children, enablePagination, type }: GuestSwiperProps,
    ref: Ref<SwiperRef>,
  ): JSX.Element {
    const props = useMemo(() => {
      const staticSliderProps: Partial<SwiperOptions> = {
        modules: [Pagination, Navigation],
        pagination: {
          enabled: enablePagination,
          type: "fraction",
        },
        allowTouchMove: false,
      };

      const cardsSliderProps: Partial<SwiperOptions> = {
        modules: [Pagination, EffectCards],
        pagination: {
          enabled: enablePagination,
          clickable: true,
        },
        effect: "cards",
        cardsEffect: { perSlideOffset: 5, perSlideRotate: 3 },
        grabCursor: true,
        allowTouchMove: true,
      };

      return type == "static" ? staticSliderProps : cardsSliderProps;
    }, [type, enablePagination]);

    return (
      <Swiper
        ref={ref}
        className={className}
        slidesPerView={1}
        centeredSlides={true}
        {...props}
      >
        {children}
      </Swiper>
    );
  },
);

class ReplyCounter {
  private guestsReplied: boolean[];

  constructor(invite: Invite) {
    this.guestsReplied = invite.guests.map((_) => false);
  }

  setReplied(index: number, replied: boolean) {
    this.guestsReplied[index] = replied;
  }

  nextToReply(from: number): Nullable<number> {
    for (let offset = 0; offset < this.guestsReplied.length; offset++) {
      const index = (from + offset) % this.guestsReplied.length;
      if (!this.guestsReplied[index]) {
        return index;
      }
    }

    return null;
  }
}
