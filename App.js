import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAktif from './assets/home-aktif.jpg';
import HomeInaktif from './assets/home.jpg';
import ShopAktif from './assets/shop-aktif.jpg';
import ShopInaktif from './assets/shop.jpg';
import BagAktif from './assets/bag-aktif.png';
import BagInaktif from './assets/bag.png';
import FavAktif from './assets/fav-aktif.png';
import FavInaktif from './assets/fav.png';
import ProfileAktif from './assets/profile-aktif.png';
import ProfileInaktif from './assets/profile.png';
import ProfileImage from './assets/kikiprofile.jpg';
import HomeImage from './assets/refal.jpg';

const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <View style={styles.HomeContainer}>
      <Image
        source={HomeImage}
        style={styles.HomeImage}
      />
      <Text style={styles.texthome1}>NEW FASHION</Text>
    </View>
  );
}

function ShopPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Shop Page</Text>
    </View>
  );
}

function BagPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bag Page</Text>
    </View>
  );
}

function FavPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Favorite Page</Text>
    </View>
  );
}

function ProfileButton({ title, subtitle }) {
  return (
    <TouchableOpacity style={styles.profileButton}>
      <Text style={styles.buttonTitle}>{title}</Text>
      <Text style={styles.buttonSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

function ProfilePage() {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.ProfileText}>My Profile</Text>
      <View style={styles.profileInfo}>
        <Image
          source={ProfileImage}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Andi Resqi Putriyani Nur</Text>
          <Text style={styles.emailText}>kiki@gmail.com</Text>
        </View>
      </View>
      <ProfileButton title="My Orders" subtitle="Already have 12 orders" />
      <ProfileButton title="Shipping addresses" subtitle="3 address" />
      <ProfileButton title="Payment methods" subtitle="Visa **34" />
      <ProfileButton title="Promocodes" subtitle="You have special promocodes" />
      <ProfileButton title="My reviews" subtitle="Reviews for 4 items" />
      <ProfileButton title="Settings" subtitle="Notifications, password" />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : ShopInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavAktif : FavInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileAktif : ProfileInaktif}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    position: 'relative',
  },
  HomeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  texthome1: {
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 30,
    left: 20,
  },
  profileContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20
  },
  ProfileText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 15
  },
  textContainer: {
    flexDirection: 'column'
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  emailText: {
    fontSize: 16,
    color: "gray"
  },
  profileButton: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonSubtitle: {
    fontSize: 14,
    color: "gray"
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
