import { SafeAreaView, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../components/app/CustomText';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import SearchBar from '../components/app/SearchBar';
import { onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { paymentsCollection, transformCollection } from '../firebase';
import useAuth from '../hooks/useAuth';
import { STATUS_PENDING, TYPE_DEBT } from '../constants/payment';
import { FaceFrownIcon } from 'react-native-heroicons/outline';
import PaymentGroup from '../components/payments/PaymentGroup';

const PaymentsScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);

  // TODO user adatainak lekérése
  // TODO payments hónap szerinti megjelenítése

  useEffect(() => {
    const q = query(paymentsCollection, where('userId', '==', user.uid), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, snapshot => {
      const docs = transformCollection(snapshot.docs);

      setPayments(docs.filter(item => item.status !== STATUS_PENDING));
      setPendingPayments(docs.filter(item => item.status === STATUS_PENDING));
    });

    return () => unsubscribe();
  }, []);

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-2 p-4 h-full">
          <View className="mb-4">
            <CustomText className="text-white dark:text-black text-2xl">
              Payments
            </CustomText>
          </View>

          <View className="flex flex-row justify-between rounded-xl space-x-4 mb-4">
            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-sky-600 rounded-lg p-3"
              onPress={() => navigation.navigate('PaymentModal')}
            >
              <ArrowUpIcon color={colors.white} size={20} />
              <CustomText className="text-lg text-white">
                Debt
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-red-500 rounded-lg p-3">
              <ArrowDownIcon color={colors.white} size={20} />
              <CustomText className="text-lg text-white">
                Loan
              </CustomText>
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <SearchBar screenName="Payments" />
          </View>

          {pendingPayments.length === 0 && payments.length === 0 && 
            <View className="flex flex-col space-y-4 items-center">
              <FaceFrownIcon color={colors.white} size={64} />
              <CustomText className="text-white text-base">
                There are no added payments yet
              </CustomText>
            </View>
          }

          {pendingPayments.length > 0 &&
            <View>
              <PaymentGroup title="Pending payments" payments={pendingPayments} />
            </View>
          }

          {payments.length > 0 &&
            <View>
              <PaymentGroup title="2022 October" payments={payments} />
            </View>
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default PaymentsScreen;
