import * as React from "react";
import { Button, SafeAreaView } from "react-native";
import AddRoutineModal from "./components/AddRoutineModal";
import DeleteRoutineModal from "./components/DeleteRoutineModal";
import ListOfRoutines from "./components/ListOfRoutines";
import NoRoutines from "./components/NoRoutines";
import { fetchRoutines, removeRoutine } from "./RoutinesRequests";
import { useAuth } from "../../context/auth";
import styles from "./RoutinesStyles";
import FullPageLoading from "../../components/misc/FullPageLoading";
import { colors } from "../../styles/colors";

const RoutineScreen = ({ navigation }) => {
  const [routines, setRoutines] = React.useState([]);
  const [selectedRoutine, setSelectedRoutine] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = React.useState(false);

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

  const deleteRoutine = async routine => {
    const id = { id: selectedRoutine.id };
    await removeRoutine(id);

    const filteredRoutines = routines.filter(r => r.id !== routine.id);

    hideDeleteModal();
    setRoutines(filteredRoutines);
  };

  const alphaMap = {};

  routines.forEach(routine => {
    let firstLetter = routine.name[0];

    if (!alphaMap[firstLetter]) {
      alphaMap[firstLetter] = [routine];
    } else {
      alphaMap[firstLetter].push(routine);
    }
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("AddRoutine")} />
      ),
    });
  }, [navigation]);

  const hideModal = () => setIsVisible(false);
  const showDeleteModal = () => setIsDeleteVisible(true);
  const hideDeleteModal = () => setIsDeleteVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <FullPageLoading color={colors.black} size={"small"} />
      ) : routines.length > 0 ? (
        <ListOfRoutines
          routines={alphaMap}
          showDelete={showDeleteModal}
          setSelectedRoutine={setSelectedRoutine}
        />
      ) : (
        <NoRoutines />
      )}
      <AddRoutineModal isVisible={isVisible} hideModal={hideModal} />
      <DeleteRoutineModal
        isVisible={isDeleteVisible}
        closeModal={hideDeleteModal}
        deleteRoutine={deleteRoutine}
        routine={selectedRoutine}
      />
    </SafeAreaView>
  );
};

export default RoutineScreen;
