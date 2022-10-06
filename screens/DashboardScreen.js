import { SafeAreaView, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import CustomText from '../components/app/CustomText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowUp, faBell } from '@fortawesome/free-solid-svg-icons';
import colors from 'tailwindcss/colors';
import PaymentCard from '../components/dashboard/PaymentCard';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';

const DashboardScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-4 p-4">
          <View className="flex flex-row justify-between mb-4">
            <CustomText className="text-white dark:text-black text-2xl">
              Welcome {user.displayName ?? 'my friend'}!
            </CustomText>
            <TouchableOpacity className="p-2">
              <FontAwesomeIcon icon={faBell} color={colors.white} size={22} />
            </TouchableOpacity>
          </View>

          <View className="h-48 rounded-lg">
            <ImageBackground source={
              require('../assets/credit_card.png')
            } resizeMode="cover" imageStyle={{borderRadius: 10}}>
              <View className="flex flex-col justify-end h-full w-full rounded-lg p-4">
                <View className="flex flex-col items-start p-2">
                  <CustomText className="text-white">
                    Total balance
                  </CustomText>
                  <CustomText className="text-white text-2xl">
                    $5 000
                  </CustomText>
                </View>
                <View className="flex flex-row justify-between p-2 rounded-xl bg-ilending-800">
                  <View className="grow items-center justify-center">
                    <CustomText className="text-white">
                      Debts
                    </CustomText>
                    <CustomText className="text-white text-lg">
                      $500
                    </CustomText>
                  </View>
                  <View className="grow items-center justify-center">
                    <CustomText className="text-white">
                      Loans
                    </CustomText>
                    <CustomText className="text-white text-lg">
                      $1 500
                    </CustomText>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View className="flex flex-row justify-between rounded-xl space-x-4 mb-8">
            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-sky-600 rounded-lg p-3"
              onPress={() => navigation.navigate('PaymentModal')}
            >
              <FontAwesomeIcon icon={faArrowUp} color={colors.white} size={18} />
              <CustomText className="text-lg text-white">
                Debt
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-900 rounded-lg p-3">
              <FontAwesomeIcon icon={faArrowDown} color={colors.white} size={18} />
              <CustomText className="text-lg text-white">
                Loan
              </CustomText>
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <View className="flex flex-row justify-between items-start">
              <CustomText className="text-white text-lg">
                Payments
              </CustomText>
              <TouchableOpacity className="p-2">
                <CustomText className="text-white">
                  See all
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DashboardScreen;
