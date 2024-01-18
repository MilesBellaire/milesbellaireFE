import '../Css/SideDiamonds.css';

export default function SideDiamonds({scrollY=0, componentHeights=[], scrollTo=()=>{}}) {
   const selectedColor = [36, 69, 69];
   const unselectedColor = [255, 255, 255];

   const colorEquation = (x, selectedColor, unselectedColor, centerPoint, leftStd, rightStd) => {
      const std = x < centerPoint ? leftStd : rightStd;
      const exponent = -((x - centerPoint)**2) / (2 * std**2);
      return (selectedColor - unselectedColor) * Math.exp(exponent) + unselectedColor;
   }

   const diamonds = () => componentHeights.map((_, index, array) => {
      const position = array.slice(0, index).reduce((acc, num) => acc + num, 0);
      const color = [
         colorEquation(scrollY, selectedColor[0], unselectedColor[0], position, componentHeights[index-1]/2, componentHeights[index]/2),
         colorEquation(scrollY, selectedColor[1], unselectedColor[1], position, componentHeights[index-1]/2, componentHeights[index]/2),
         colorEquation(scrollY, selectedColor[2], unselectedColor[2], position, componentHeights[index-1]/2, componentHeights[index]/2),
      ];

      return (
         <div 
            key={index}
            className="Diamond" 
            style={{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`}}
            onClick={()=>scrollTo(position)}
         />
      );
    });

   return (
      <div className="SideDiamonds">
         {diamonds()}
      </div>
   );
}