import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#FBFF00",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
  },
  inputDark: {
    height: 50,
    borderWidth: 1,
    borderColor: "#7A0404",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#FFD1CE",
    justifyContent: "center",
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  button: {
    flex: 0.48,
  },
  largeButton: {
    marginTop: 15,
  },
  buttonImage: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageLogo: {
    flex: 0.6,
    resizeMode: "stretch",
    marginLeft: 30,
    marginRight: 30,
  },
  imageLogo2: {
    flex: 0.86,
    resizeMode: "stretch",
    marginLeft: 30,
    marginRight: 30,
  },
  search: {
    margin: 20,
  },
  baseText: {
    fontWeight: "bold",
    color: "#FBFF00",
    fontSize: 16,
    paddingBottom: 10,
    textAlign: "center",
  },
  baseTextDark: {
    fontWeight: "bold",
    color: "#000000",
    //color: "#7F0606",
    fontSize: 16,
    paddingBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    padding: 2,
  },
  scrollView: {
    backgroundColor: "#E7E4F1",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    height: 100,
  },
});
