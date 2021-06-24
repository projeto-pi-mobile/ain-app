import React from "react";
import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ActivityCard from "../../Elements/ActivityCard";

import { useAuth } from "../../contexts/auth";
import api from "../../service/api";

const Activities = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { user, loading } = useAuth();
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    updateJobs();
  }, [user]);

  const updateJobs = async () => {
    const response = await api.get(`user/${user.id}`);
    setJobs(response.data.data.jobs.sort((a, b) => a.name > b.name));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateJobs();
    setRefreshing(false);
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <ActivityIndicator size="large" color="#04D361" />
        ) : jobs.length === 0 ? (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <Text>Sem atividades cadastradas</Text>
          </View>
        ) : (
          <ActivityCard data={jobs} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activities;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
});
