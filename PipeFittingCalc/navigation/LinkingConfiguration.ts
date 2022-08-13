/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          FittingMiter: {
            screens: {
              FittingMiter: 'FittingMiter',
            },
          },
          SimpleOffset: {
            screens:{
              SimpleOffSetScreen: 'SimpleOffSet',
            },
            
          },
          PipeWeight: {
            screens:{
              PipeWeight: 'PipeWeight',
            },
          },
          RiggingCalc: {
            screens:{
              RiggingCalc: 'RiggingCalc'
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
