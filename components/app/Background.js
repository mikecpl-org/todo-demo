import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from 'tailwindcss/colors';

const Background = () => {
  // TODO handle this
  // TODO handle this

  return (
    <LinearGradient
      colors={[colors.slate[800], colors.slate[800], colors.slate[900]]}
      className="h-full w-full absolute"
    />
  )
}

export default Background;
