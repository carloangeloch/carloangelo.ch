import { useEffect, useState } from "react"


export const textTyping = (texts: string[]) => {
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentRole = texts[roleIndex];
      let typingSpeed = 50;
  
      if (isDeleting) {
        typingSpeed = 30;
      }
  
      const handleTyping = () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else if (!isDeleting && charIndex === currentRole.length) {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 3000); // Show full text for 3 seconds
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % texts.length);
        }
      };
  
      const timer = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex, texts]);
    
    return <span>{displayText}<span className="w-1 h-full bg-c ml-0.5 animate-typing ">&nbsp;</span></span>
   
    
}