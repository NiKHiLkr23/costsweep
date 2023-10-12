"use client";

import Image from "next/image";
import { FC } from "react";

interface BookmarkButtonProps {}

const BookmarkButton: FC<BookmarkButtonProps> = ({}) => {
  const handleBookmark = () => {
    if ((window as any).sidebar && (window as any).sidebar.addPanel) {
      // For Firefox
      (window as any).sidebar.addPanel(
        document.title,
        window.location.href,
        ""
      );
    } else if (
      (window.external as any) &&
      "AddFavorite" in (window.external as any)
    ) {
      // For Internet Explorer
      (window.external as any).AddFavorite(location.href, document.title);
    } else if (
      ((window as any).opera as any) &&
      ((window as any).opera as any).print
    ) {
      // For Opera
      const bookmarkLink = document.createElement("a");
      bookmarkLink.rel = "sidebar";
      bookmarkLink.title = document.title;
      bookmarkLink.href = document.location.href;
      bookmarkLink.click();
    } else if ((window as any).chrome) {
      // For Google Chrome
      alert("Press Ctrl+D (or Cmd+D on Mac) to bookmark this page.");
    } else {
      // For other browsers
      alert(
        "Please use your browser's bookmark function to bookmark this page."
      );
    }
  };

  return (
    <div>
      <button onClick={handleBookmark}>
        <Image
          src="/assets/icons/bookmark.svg"
          alt="bookmark"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default BookmarkButton;
