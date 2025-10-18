import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllLaptops } from "../rests/laptops";
import { Button } from "@rneui/base";
import { useState } from "react";

// 🧾 Componente principal que muestra la lista de contactos
export const LaptopList = () => {

  // 🗂️ Estado inicial con algunos contactos de ejemplo
  const [laptopsList, setLaptopsList] = useState([]);

  // Componente interno que muestra cada contacto en la lista
  const LaptopItem = ({ laptop }) => {
    return (
      <View style={styles.item}>
        <Text>{laptop.id}</Text>
        <Text>{laptop.marca} {laptop.procesador}</Text>
        <Text>{laptop.memoria}</Text>
        <Text>{laptop.disco}</Text>
      </View>
    );
  };

  // 🔄 Función que se llama cuando se obtienen los datos desde el servidor
  // Actualiza la lista de contactos en pantalla
  const fnRefreshList = (laptops) => {
    console.log("refrescar lista", laptops);
    setLaptopsList(laptops); // 🔁 Actualiza el estado con los nuevos contactos
  };

  // 🧱 Vista principal que contiene todo el diseño
  return (
    <View style={styles.container}>
      {/* 🏷️ Título */}
      <Text style={styles.title}>Lista de Laptops</Text>

      {/* 🔘 Botón para consultar los laptops del servidor */}
      <Button
        title="Consultar Laptops"
        onPress={() => {
          // Cuando se presiona el botón, llama a la función getAllLaptops
          // y le pasa la función que refresca la lista
          getAllLaptops(fnRefreshList);
        }}
      />

      {/* 📋 FlatList muestra automáticamente todasa las laptops */}
      <FlatList
        data={laptopsList} // Datos a mostrar
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <LaptopItem laptop={item} />} // Cómo mostrar cada elemento
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
    borderBottomWidth: 1,  // Línea debajo de cada contacto
    borderBottomColor: "#ccc",
    paddingVertical: 10,   // Espacio arriba y abajo del texto
  },
});

