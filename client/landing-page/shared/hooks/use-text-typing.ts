import { useEffect, useState } from 'react';

const phrases = {
  Typing: 'Typing',
  Pausing: 'Pausing',
  Deleting: 'Deleting',
};

const TYPING_INTERVAL = 30;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

const useTextTyped = (superpowers: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phrase, setPhrase] = useState(phrases.Typing);
  const [typedSuperpower, setTypedSuperpower] = useState('');

  useEffect(() => {
    switch (phrase) {
      case phrases.Typing: {
        const nextTypedSuperpower = superpowers[selectedIndex]!.slice(
          0,
          typedSuperpower.length + 1,
        );

        if (nextTypedSuperpower === typedSuperpower) {
          setPhrase(phrases.Pausing);

          return;
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextTypedSuperpower);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case phrases.Deleting: {
        if (!typedSuperpower) {
          const nextSelectedIndex = selectedIndex + 1;

          setSelectedIndex(
            superpowers[nextSelectedIndex] ? nextSelectedIndex : 0,
          );

          setPhrase(phrases.Typing);

          return;
        }

        const nextRemainingSuperpower = superpowers[
          selectedIndex
        ]!.slice(0, typedSuperpower.length - 1);

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextRemainingSuperpower);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      default: {
        const timeout = setTimeout(() => {
          setPhrase(phrases.Deleting);
        }, PAUSE_MS);

        return () => clearTimeout(timeout);
      }
    }
  }, [typedSuperpower, superpowers, phrase, selectedIndex]);

  return { typedSuperpower, phrase };
};

export default useTextTyped;
