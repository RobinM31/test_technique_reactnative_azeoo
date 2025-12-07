import { Tabs } from 'expo-router';

// Contient la gestion de naviagtion de la tab Bar
// Redirige vers la page d'acceuil, le profile et la page de recherche
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Accueil',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profil',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabel: 'Recherche',
        }}
      />
    </Tabs>
  );
}