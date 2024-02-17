import { useState, useEffect } from 'react';

const useSpecialDay = (targetDay, valentinesMonth, valentinesDay) => {
  const [isSpecialDay, setIsSpecialDay] = useState(false);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateAndSetSpecialDay = () => {
      const today = new Date();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth(); // January is 0
      const currentYear = today.getFullYear();

      // Calculate the next target day date (13th of month)
      let nextTargetDate = new Date(currentYear, currentMonth, targetDay);
      if (today >= nextTargetDate) {
        if (currentMonth === 11) { // If it's December, roll over to next year's January
          nextTargetDate = new Date(currentYear + 1, 0, targetDay);
        } else {
          nextTargetDate = new Date(currentYear, currentMonth + 1, targetDay);
        }
      }

      // Calculate the next Valentine's Day date
      let nextValentinesDate = new Date(currentYear, valentinesMonth, valentinesDay);
      if (today >= nextValentinesDate) {
        nextValentinesDate = new Date(currentYear + 1, valentinesMonth, valentinesDay);
      }

      // Determine which event is next
      let nextEventDate = nextTargetDate < nextValentinesDate ? nextTargetDate : nextValentinesDate;

      // Check if today is a special day
      const isTodaySpecial = (currentDay === targetDay && today < nextTargetDate) || (currentMonth === valentinesMonth && currentDay === valentinesDay);
      setIsSpecialDay(isTodaySpecial);

      const updateCountdown = () => {
        const now = new Date();
        const distance = nextEventDate - now;
        if (distance < 0) {
          setIsSpecialDay(true);
          setCountdown('');
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      };

      if (!isTodaySpecial) {
        updateCountdown(); // Update immediately to set initial countdown
        const intervalId = setInterval(updateCountdown, 1000);
        return () => clearInterval(intervalId);
      }
    };

    calculateAndSetSpecialDay();
  }, [targetDay, valentinesDay, valentinesMonth]);

  return { isSpecialDay, countdown };
};

export default useSpecialDay;
