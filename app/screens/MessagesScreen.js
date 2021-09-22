import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeperator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet imperdiet nulla. Nunc fringilla tincidunt congue. Praesent eu finibus ipsum. Nullam scelerisque massa sit amet ullamcorper consequat. Nam gravida, nisl venenatis egestas suscipit, lorem odio dapibus nulla, sit amet vestibulum nisi sem quis neque. Mauris convallis metus eget felis molestie sollicitudin. Sed congue tortor eu placerat scelerisque. Pellentesque vel tincidunt magna, in vulputate lectus. Proin ullamcorper urna et dui molestie, id sagittis velit ullamcorper. Suspendisse porttitor elit a facilisis varius. In ut gravida dolor. Mauris quam est, imperdiet id posuere vitae, vehicula non nibh. Interdum et malesuada fames ac.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet imperdiet nulla. Nunc fringilla tincidunt congue. Praesent eu finibus ipsum. Nullam scelerisque massa sit amet ullamcorper consequat. Nam gravida, nisl venenatis egestas suscipit, lorem odio dapibus nulla, sit amet vestibulum nisi sem quis neque. Mauris convallis metus eget felis molestie sollicitudin. Sed congue tortor eu placerat scelerisque. Pellentesque vel tincidunt magna, in vulputate lectus. Proin ullamcorper urna et dui molestie, id sagittis velit ullamcorper. Suspendisse porttitor elit a facilisis varius. In ut gravida dolor. Mauris quam est, imperdiet id posuere vitae, vehicula non nibh. Interdum et malesuada fames ac.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "d2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
