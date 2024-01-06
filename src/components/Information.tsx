import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Information = () => {
  const [english, setEnglish] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        {english ? (
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Welcome to Peyvok</Text>
            <Text style={styles.text}>
              Introducing a mobile digital dictionary designed for kids to
              practice Northern Kurdish also known as Kurmancî. Tailored to
              assist parents raising bilingual children, the app features a
              collection of visual and audible content, encompassing various
              lexical categories. Each word within the application is
              accompanied by a vibrant image, informative text, and an audio
              file pronouncing the word in Kurdish. With a simple click, users
              can effortlessly immerse their children in the rich sounds of the
              Kurdish language, fostering a seamless bilingual learning
              experience.
            </Text>
            <Text style={styles.text}>Contact: peyvok@outlook.com</Text>
            <View style={styles.langBox}>
              <TouchableOpacity onPress={() => setEnglish(false)}>
                <Text style={styles.lang}> {'>'} bi kurdî</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Tu bi xêr hatî Peyvokê</Text>
            <Text style={styles.text}>
              Bi vê aplîkasyona mobîl ku weke ferhengokeke dîjîtal e zarokên
              biçûk dikarin zimanê xwe yê dayikê ango kurdî bi pêş ve bibin. Ev
              xebat bi taybetî ji bo dêûbavên ku dixwazin zarokên du-zimanî
              mezin bikin weke alîkariyekê hatiye dîzayn kirin. Aplîkasyon ji
              çend kategoriyên peyvan pêk tê. Di her kategoriyekê de komek peyv
              hene û her peyvek ji wêneyekî rengîn, nivîs û qeyda dengî pêk tê.
              Dema zarok li ser îkona deng ditikînin ew dikarin bibihîzin ka ew
              peyv bi kurdî çawa tê bi lêv kirin. Bi vî awayî bi tikîneke hesan
              dêûbav dikarin zimanê zengîn û rengîn ê kurdî pêşkêşî zarokên xwe
              bikin.
            </Text>
            <Text style={styles.text}>Têkilî: peyvok@outlook.com</Text>
            <View style={styles.langBox}>
              <TouchableOpacity onPress={() => setEnglish(true)}>
                <Text style={styles.lang}>{'>'} in English</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  textBox: {
    marginHorizontal: 70,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  infoTitle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
  },
  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
  },
  langBox: {
    width: 100,
  },
  lang: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
  },
});
