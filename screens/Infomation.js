import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
  navigation,
  FlatList,
  Image,
  Alert
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Food extends React.Component {

  insertPersonal = () => {
    fetch('http://192.168.43.193/NSC/Insert_information.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Heights: this.state.Height,
        weight: this.state.Weight,
        Ages: this.state.Age,
        Sexs: this.state.Sex,
        diseases: this.state.disease,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <Image style={{ height: 300, width: Dimensions.get('window').width }} source={require('../img/4.jpg')} />
          <View style={{ position: 'absolute', top: 160, left: 20, right: 0, bottom: 20 }}>
            <Text style={{ fontSize: 50, fontWeight: '800', color: '#fff' }}>
                Personal Information
            </Text>
          </View>
          <View style={styles.cards}>
          <ScrollView horizontal = {false
          }>
            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Height
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='cm'
                onChangeText={(Height) => this.setState({Height})}
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Weight
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='kg'
                onChangeText={(Weight) => this.setState({Weight})}
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Age
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                placeholder='year'
                onChangeText={(Age) => this.setState({Age})}
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                congenital disease
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                onChangeText={(disease) => this.setState({disease})}
              />
            </View>

            <View style = {{margin : 20}}>
              <Text style = {{fontSize : 15 ,fontWeight : '500'}}>
                Sex
              </Text>
            </View>

            <View style = {{marginTop : 10 ,alignItems: 'center' ,}}>
              <TextInput
                style = {{height : 40 ,width : 300}}
                color = '#f6f5f5'
                placeholder='female or male'
                onChangeText={(Sex) => this.setState({Sex})}
              />
            </View>
            <View style = {styles.button}>
                <Button
                    title = "confirm"
                    onPress={this.insertPersonal}
                />
            </View>
            </ScrollView>
        </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  cards: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#e7e7e7',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    top: 280,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    marginLeft : Dimensions.get('window').width / 3,
    width: 150,
    height: 50,
    marginTop: 30,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
  }
});