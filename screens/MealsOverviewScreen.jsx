import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummydata";
import MealsList from "../Components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  // go thru all the meals and keep all the meals that fall into
  // a specific category
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  /* 
  I wanted to solve a problem where when I navigate to a different screen;
  I wanted the header title to be set dynamically through route parameters
  
  I used useEffect() at first, but this only runs after your component 
  has been rendered. This created some weird glitch and was very ugly.

  The goal was to use a hook that ran simultaneously as my component
  was being rendered. The solution turned out to be useLayoutEffect() baby!!

  use -> useLayoutEffect() when you want something to happen at the 
  same time that your component is being rendered. I could see this being expensive,
  so it is not to be used for very heavy computations as you run the risk of slow component rendering!
  */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    }).title;

    // you can set the options for a screen inside of its own component
    // this could be a much cleaner way to do specific things.
    // of course, you could have default options set oon the parent stack nav
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // continue

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
