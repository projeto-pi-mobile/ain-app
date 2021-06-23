import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";
import { useAuth } from "../../contexts/auth";
import api from "../../service/api";

const width = 400;
const height = 500;

const Statistics = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const [jobs, setJobs] = React.useState([]);
  const { user } = useAuth();

  React.useEffect(() => {
    updateJobs();
  }, [user]);

  const updateJobs = async () => {
    const response = await api.get(`user/${user.id}`);
    setJobs(response.data.data.jobs);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    updateJobs();
    setRefreshing(false);
  }, [user]);

  const dA = jobs.map((job) => ({ x: job.name, y: job.hits }));

  const dataB = dA.map((point) => {
    const y = Math.round(point.y + 3 * (Math.random() - 0.5));
    return { ...point, y };
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          {jobs.length == 0 ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text>Você não possui estatísticas.</Text>
            </View>
          ) : (
            <VictoryChart horizontal height={height} width={width} padding={40}>
              <VictoryStack
                style={{ data: { width: 25 }, labels: { fontSize: 15 } }}
              >
                <VictoryBar
                  style={{ data: { fill: "#8257E5" } }}
                  data={dA}
                  y={(data) => -Math.abs(data.y)}
                  labels={({ datum }) => `${Math.abs(datum.y)}%`}
                />
                <VictoryBar
                  style={{ data: { fill: "#04D361" } }}
                  data={dataB}
                  labels={({ datum }) => `${Math.abs(datum.y)}%`}
                />
              </VictoryStack>

              <VictoryAxis
                style={{
                  axis: { stroke: "transparent" },
                  ticks: { stroke: "transparent" },
                  tickLabels: { fontSize: 15, fill: "rgba(0,0,0, .5)" },
                }}
                tickLabelComponent={
                  <VictoryLabel x={width / 2} textAnchor="middle" />
                }
                tickValues={dA.map((point) => point.x).reverse()}
              />
            </VictoryChart>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Statistics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fFFF",
  },
});
