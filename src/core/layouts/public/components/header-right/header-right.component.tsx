// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useHeaderRightStyles } from './header-right.style';
// import { NavLink } from 'react-router-dom';
// import { menu } from '.';
// import React, { useEffect, useState } from 'react';

// const HeaderRightComponent = () => {
//   const classes = useHeaderRightStyles();
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isActive, setIsActive] = useState<string>('home');
//   useEffect(() => {
//     setIsActive('home');
//   }, []);
//   const handleClick = (item: any) => {
//     // eslint-disable-next-line no-console
//     // console.log(item, 'item');
//     setIsActive(item);
//   };
//   return (
//     <ul className={classes.menu_list}>
//       {menu.map((item: any, index: number) => {
//         return (
//           <NavLink
//             key={index}
//             to={item.url}
//             className={isActive === item.name ? classes.isActive : ''}
//             onClick={() => handleClick(item.name)}
//           >
//             <li>{item.name}</li>
//           </NavLink>
//         );
//       })}
//     </ul>
//   );
// };

// export default HeaderRightComponent;
