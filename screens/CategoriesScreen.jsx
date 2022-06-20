import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummydata";
import CategoryGridTile from "../Components/CategoryGridTile";

// when we use renderItem in a flatList - we get the itemData as a value
// but this itemData is not the item itself, it is a much bigger object
// the actual individual items are located in itemData.item!

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      return navigation.navigate("Overview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onTapped={pressHandler}
      />
    );
  };

  return (
    // FlatLists come with so many props that you can set
    // you can set the number of columns to 2 for example
    <FlatList
      // we must have a data which is an array pointing to what we wish to render
      // i imagine that in the future, this will come from a cloud or database
      data={CATEGORIES}
      // the keyExtractor gets access to each specific element in the array
      keyExtractor={(item) => {
        return item.id;
      }}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
