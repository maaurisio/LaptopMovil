import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { getAllLaptops } from "../rests/laptops";
import { Button, FAB } from "@rneui/base";
import { useState, useEffect } from "react";

// 🧾 Componente principal que muestra la lista de laptops
export const LaptopList = ({ navigation }) => {

  // 🗂️ Estado inicial con algunos laptops de ejemplo
  const [laptopsList, setLaptopsList] = useState([]);

  //useEffect() ejecuta código automáticamente cuando el componente se monta, actualiza o se desmonta.
  //cuando tiene corchetes significa que se hará una sola vez
  useEffect(() => {
    console.log("ejecuto la funcion del useEffect")
    getAllLaptops(fnRefreshList);
  }, []);

  // Componente interno que muestra cada laptop en la lista
  const LaptopItem = ({ laptop }) => {
    return (
      <TouchableHighlight onPress={() => {
        navigation.navigate("LaptopFormNav", { laptopParam: laptop })
      }}>
        <View style={styles.item}>
          <Text>{laptop.id}</Text>
          <Text>{laptop.marca} {laptop.procesador}</Text>
          <Text>{laptop.memoria}</Text>
          <Text>{laptop.disco}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  // 🔄 Función que se llama cuando se obtienen los datos desde el servidor
  // Actualiza la lista de laptps en pantalla
  const fnRefreshList = (laptops) => {
    console.log("refrescar lista", laptops);
    setLaptopsList(laptops); // 🔁 Actualiza el estado con los nuevos laptps
  };

  // 🧱 Vista principal que contiene todo el diseño
  return (
    <View style={styles.container}>
      {/* 🏷️ Título */}
      <Text style={styles.title}>Lista de Laptops</Text>

      {/* 🔘 Botón para consultar los laptops del servidor 
      <Button
        title="Consultar Laptops"
        onPress={() => {
          // Cuando se presiona el botón, llama a la función getAllLaptops
          // y le pasa la función que refresca la lista
          getAllLaptops(fnRefreshList);
        }}
      />
      */}

      {/* 📋 FlatList muestra automáticamente todasa las laptops */}
      <FlatList
        data={laptopsList} // Datos a mostrar
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LaptopItem laptop={item} />} // Cómo mostrar cada elemento
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopFormNav", {})
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Ocupa toda la pantalla
    backgroundColor: "#fff",
    padding: 16,           // Margen interno

  },
  title: {
    fontSize: 22,          // Tamaño del texto
    fontWeight: "bold",    // Negrita
    marginBottom: 10,      // Espacio debajo del título
  },
  item: {
    borderBottomWidth: 1,  // Línea debajo de cada laptp
    borderBottomColor: "#ccc",
    paddingVertical: 10,   // Espacio arriba y abajo del texto
  },
});

