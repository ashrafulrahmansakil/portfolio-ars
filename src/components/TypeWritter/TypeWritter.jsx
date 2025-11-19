import { useState, useEffect } from "react";

export default function Typewriter({
  words = ["Ashraful Rahman Sakil", "Nextjs web Developer", "Frontend web Developer"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (!isDeleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (isDeleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex(subIndex - 1), deletingSpeed);
    } else if (!isDeleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <h1 className={className}>
      {`${words[index].substring(0, subIndex)} `}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
