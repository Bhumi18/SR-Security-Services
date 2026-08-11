import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterText({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 2200,
  className,
  cursorClassName,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullWord = words[currentWordIndex] || "";

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting text character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing text character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Check state transitions
    if (!isDeleting && currentText === fullWord) {
      // Pause at full word before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-flex items-baseline min-h-[1em] whitespace-nowrap", className)}>
      <span>{currentText || "\u00A0"}</span>
      <span
        className={cn(
          "ml-1 inline-block h-[0.75em] w-[3px] rounded-full bg-[#3DA5FF] animate-pulse align-middle",
          cursorClassName,
        )}
        aria-hidden="true"
      />
    </span>
  );
}
