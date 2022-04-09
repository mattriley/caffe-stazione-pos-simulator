const SpacerButton = () => ({ backColor }) => {
  if (!backColor) {
    return null;
  }

  return <div 
      className={`
      menu-button 
      span-1
      back-color-${backColor}
  `}  />
}

export default SpacerButton;
