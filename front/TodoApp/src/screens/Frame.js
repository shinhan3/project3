import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import FormContainer from '../components/FormContainer';
import CardContainer from '../components/CardContainer';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const Frame = () => {
  return (
    <View style={styles.view}>
      <View style={styles.main}>
        <FormContainer />
        <Text style={styles.bannerTitle}>
          <Text style={styles.text}>{`멍줍 서비스 `}</Text>
          <Text style={styles.text1}>5개월</Text>
          <Text style={styles.text}> 째 이용 중</Text>
        </Text>
        <View style={[styles.eventBanner1, styles.eventLayout]}>
          <View style={[styles.eventDiv, styles.eventLayout]} />
          <View style={styles.eventText}>
            <Text style={styles.headerMenu}>
              <Text style={styles.text}>{`내 댕댕이를 위한 서비스
여기에 `}</Text>
              <Text style={styles.text1}>다</Text>
              <Text style={styles.text}> 있다!</Text>
            </Text>
          </View>
          <Image
            style={[styles.phoneBenefitIcon, styles.menuDivPosition]}
            source={require('../assets/phone-benefit.png')}
          />
        </View>
        <CardContainer />
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerDiv, styles.headerPosition]} />
        <Text style={[styles.headerTitle, styles.headerTitleFlexBox]}>
          멍줍 카드
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventLayout: {
    width: 316,
    position: 'absolute',
  },
  menuDivPosition: {
    top: 0,
    position: 'absolute',
  },
  headerTitleFlexBox: {
    textAlign: 'center',
    position: 'absolute',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  playTypo: {
    color: Color.colorDarkgray_200,
    top: 26,
    textAlign: 'center',
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    top: 0,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text: {
    color: Color.colorDarkslategray_200,
  },
  text1: {
    color: Color.new1,
  },
  bannerTitle: {
    top: 625,
    left: 64,
    fontFamily: FontFamily.iBMPlexSansKRBold,
    textAlign: 'left',
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    position: 'absolute',
  },
  eventDiv: {
    top: 11,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorLightsteelblue_100,
    height: 120,
    left: 0,
  },
  headerMenu: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansKRBold,
    top: 0,
    textAlign: 'left',
    fontWeight: '700',
    left: 0,
    position: 'absolute',
  },
  eventText: {
    top: 46,
    left: 40,
    width: 168,
    height: 50,
    position: 'absolute',
  },
  phoneBenefitIcon: {
    left: 183,
    width: 131,
    height: 136,
  },
  eventBanner1: {
    top: 682,
    left: 22,
    height: 136,
  },
  main: {
    top: 52,
    height: 818,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
    color: Color.colorDarkslategray_200,
    textAlign: 'center',
    fontSize: FontSize.size_xl,
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 981,
    overflow: 'hidden',
  },
});

export default Frame;
