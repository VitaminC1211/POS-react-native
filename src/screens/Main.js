import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native';

import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { getProduct } from '../Redux/Actions/product';

import { colors, fonts } from '../styles';

const chartIcon = require('../assets/images/pages/chart.png');
const calendarIcon = require('../assets/images/pages/calendar.png');
const chatIcon = require('../assets/images/pages/chat.png');
const galleryIcon = require('../assets/images/pages/gallery.png');
const profileIcon = require('../assets/images/pages/profile.png');
const loginIcon = require('../assets/images/pages/login.png');
const blogIcon = require('../assets/images/pages/blog.png');

const Main = (props) => {

  const [page, setPage] = useState(0);
  const [infoPage, setInfoPage] = useState({maxPage: 0, totalAllProduct: 0});
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const dispatch = useDispatch();

  const fetchDataProduct = async () => {
    try {
      const response = await dispatch(getProduct(rowsPerPage, page + 1, props.item.token))
      setInfoPage (response.value.data.data.infoPage);
    } catch (error) {
      console.log (error);
    }
  }

  useEffect(() => {
      fetchDataProduct ();
  },[page, rowsPerPage])

  return(
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={chartIcon}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Noodles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={galleryIcon}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={profileIcon}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={chatIcon}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={calendarIcon}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.item}
          >
            <Image
              resizeMode="contain"
              source={loginIcon}
              tintColor={colors.primary}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Noodles')}
            style={styles.blogItem}
          >
            <Image
              resizeMode="contain"
              source={blogIcon}
              tintColor={colors.primary}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Blog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  blogItem: {
    width: '31%',
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});

const mapStateToProps = state => {
    return {
        item: state.auth.resultsItem,
        setProduct: state.product.viewProduct,
        userDetail: state.auth.resultsLogin
    };
};

export default connect(mapStateToProps) (Main)
