import { usePublicLayoutStyles } from './home.style';

function HomeComponent() {
  const classes = usePublicLayoutStyles();
  return (
    <div>
      <div className={classes.home}>
        {/* <HeroComponent /> */}
      </div>
      <div>
      {/* <TitleComponent/> */}
      </div>
    </div>
  );
}

export default HomeComponent;
