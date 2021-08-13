import * as React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import AddRoutineModal from "./components/AddRoutineModal";
import ListOfRoutines from "./components/ListOfRoutines";
import NoRoutines from "./components/NoRoutines";
import { fetchRoutines } from "./RoutinesRequests";
import { useAuth } from "../../context/auth";
import styles from "./RoutinesStyles";
import FullPageLoading from "../../components/misc/FullPageLoading";
import { colors } from "../../styles/colors";

const RoutineScreen = ({ navigation }) => {
  const [routines, setRoutines] = React.useState([]);
  const [selectedRoutine, setSelectedRoutine] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const {
    user: { userId },
  } = useAuth();

  React.useEffect(() => {
    const fetchUserRoutines = async () => {
      setIsLoading(true);

      const response: any = await fetchRoutines(userId);
      const myRoutines = response.data?.listRoutines?.items;

      myRoutines.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      setRoutines(myRoutines);
      setIsLoading(false);
    };

    fetchUserRoutines();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("AddRoutine")} />
      ),
    });
  }, [navigation]);

  const hideModal = () => setIsVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <FullPageLoading color={colors.black} size={"small"} />
      ) : routines.length > 0 ? (
        <ListOfRoutines routines={routines} />
      ) : (
        <NoRoutines />
      )}
      <AddRoutineModal isVisible={isVisible} hideModal={hideModal} />
    </SafeAreaView>
  );
};

export default RoutineScreen;
