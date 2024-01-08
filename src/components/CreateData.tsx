import {BSON} from 'realm';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {RealmContext, Word} from '../models/Word';
import categoryData from '../../assets/categoryData.json';
import {ICategory} from '../models/ICategory';
import {Category} from '../models/Category';
import React from 'react';

export const CreateData = () => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);
  const {useRealm, useQuery} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
      mutableSubs.add(realm.objects(Category));
    });
  }, []);

  const data = useCallback(() => {
    realm.write(() => {
      realm.create('Word', {
        word: 'zer',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/mig9x6rrqib6p7857a9su/yellow_card.png?rlkey=4y694uxm77ncplyqym9k3rms0&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/8qsbohsrsxxi53f7pah09/zer.mp3?rlkey=qjc5pvn3f2hf4d90p2563k3gt&dl=0',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'sor',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/2laz9bngbmtmnew721m41/red_card.png?rlkey=ozc2o0sqfz76fmhu55zhxicca&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/gu1igwxqbzqt5cxsi4n76/sor.mp3?rlkey=3fmwlp8fjfs3j3xcl9jqgoeqx&dl=0',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'spî',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/6j0g4s706050vimgxzdm5/white_card.png?rlkey=gjx97r9ai3sprzz215sm31sm3&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/ixdt0qh2f0rof0nsfo0zu/spi.mp3?rlkey=izhhhx3c0aaugpga0le744a0j&dl=0',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'kesk',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/dff02qnqc1byo26o8bodi/green_card.png?rlkey=l2ygvjhoamhwydalxqrzd6o1l&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/dq24o4qspjp1m4c2op7lx/kesk.mp3?rlkey=w8lb9n4himwlqq9w84ts81fse&dl=0',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'kûçik',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/nfwko08u1yak10knw75ad/dog_disney.png?rlkey=th9xgnw811rkexzzb6ydcbavi&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/j27jdvx3cqoy8u4irkpsk/kucik.mp3?rlkey=04gj0lvd6382rtk059lc18ncv&dl=0',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'pisîk',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/jr0jc8zh0d65tggqgvbqn/cat_disney.png?rlkey=2lrpshnmsqqhef30r4brq77ds&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/mr2kku1fgp4xar0eglcx3/pisik.mp3?rlkey=n68au2q9x4dti91ntrxoj4r7o&dl=0',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'jûjî',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/50okpisxdwafs8xu2n1s3/hegdehog_disney.png?rlkey=z0rcx9o5xskl73gqzhzl6g8j8&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/vnhskzcdsvo3vncuy4urf/juji.mp3?rlkey=zq6tewj98xu4qtnrwtqryjpcc&dl=0',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'çivîk',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/aq1tey1a9nrnvtaw3rt45/robin_bird.png?rlkey=kx8192t1x6wqrq4ap0xqvng4x&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/3pyfaf7fgaf7ydijbykpt/civik.mp3?rlkey=fiz0b4tl6jbrx9zixzlfl047z&dl=0',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'sêv',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/c089nx6g8hiolilkq94c0/apples.png?rlkey=7bodju7gryj49yjsvwymd28ww&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/ou7spzzm1roo2g0oc168d/sev.mp3?rlkey=4ey4n0xchl36on6jw5gaoyo90&dl=0',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'hirmî',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/9qzwa55mzukjllhq34f0o/pears.png?rlkey=clawr8k27htjgoh7z5vrps126&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/i9jn1w5u16f6kkuzm3y6o/hirmi.mp3?rlkey=vbd8lwg92gnqkcymew5xj3fk6&dl=0',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'mûz',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/87x0uhcpxsm519e68ht0q/bananas.png?rlkey=7um8c65ue5i1b888lwuymc5vg&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/7agpj5inrxetdurs1tavb/muz.mp3?rlkey=013k9ur5kwiu9zvk1gxclnuon&dl=0',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'trî',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/8bi9yobvamexv337edwom/grapes.png?rlkey=wd1y7dcbieyanbr1squnoh4tt&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/cr9qcc16oy8t02vo4u6l4/tri.mp3?rlkey=ccggpvae33fj3ndohqeuuwrio&dl=0',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'xelek',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/ents6yc7nvrsckryea61y/circle_new.png?rlkey=dzs0mc4afufx3ah4v834pafnm&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/8jub0m4uxgll0yj6q7vtl/xelek.mp3?rlkey=tfakxfi5a9sjsk4z5nmhmgc4z&dl=0',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'gilover',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/9ps9r0qvvsh24wayfffq8/round_new.png?rlkey=zygcupf2u5bu5gcv2etqqsfyt&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/zs4vhrwjdwkg07ut3u1bo/gilover.mp3?rlkey=e6ft89vgmx8xy6hooljlp5x2f&dl=0',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'çargoşe',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/6hr985pj735etbod3eesy/sqaure_new.png?rlkey=1m2adjm2vq95qioxcx5n7xetk&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/kpefcnxhyvhwguieyxmd9/cargose.mp3?rlkey=ye17t2xr9apieavrmp1j5g7fw&dl=0',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'sêgoşe',
        image:
          'https://dl.dropboxusercontent.com/scl/fi/x5p51j4j8tq131ucl2o42/triangle_new.png?rlkey=3aintaiflqjr5g229vzy2y8tx&dl=0',
        audio:
          'https://dl.dropboxusercontent.com/scl/fi/bvdccqy6gbcyvca3b7r06/segose.mp3?rlkey=6hqji4yntde4kvy1dw7o055d5&dl=0',
        category: 'shapes',
      });
    });

    setIsSureToDelete(false);
  }, [realm]);

  const createCategories = useCallback(() => {
    try {
      realm.write(() => {
        realm.create('Category', {
          imgURL:
            'https://dl.dropboxusercontent.com/scl/fi/9xvwoh2ih6v2a5f2qo76q/colors_new.png?rlkey=0rqerv59jhme1437b5k5h13i2&dl=0',
          categoryNameKU: 'reng',
          categoryName: 'colors',
          categoryAudio:
            'https://dl.dropboxusercontent.com/scl/fi/bly0yyxmc4k8wet8cb6hw/reng.mp3?rlkey=8usp9hgm7cpovk1itfreny7vr&dl=0',
        });
        realm.create('Category', {
          imgURL:
            'https://dl.dropboxusercontent.com/scl/fi/5dksjflweh8ocicws1iob/animals_new.png?rlkey=oc0uq2ojg549jw87zuqrwisvs&dl=0',
          categoryNameKU: 'ajel',
          categoryName: 'animals',
          categoryAudio:
            'https://dl.dropboxusercontent.com/scl/fi/3gx5qyr14xsd5xbc46em5/ajel.mp3?rlkey=qvrrsrt9iv3c6yufme6rw6xxb&dl=0',
        });

        realm.create('Category', {
          imgURL:
            'https://dl.dropboxusercontent.com/scl/fi/gsmo7xwra9pc8s97ml828/fruits_new.png?rlkey=2woqohh8n3d3k4vjrdco1swtg&dl=0',
          categoryNameKU: 'fêkî',
          categoryName: 'fruits',
          categoryAudio:
            'https://dl.dropboxusercontent.com/scl/fi/azpgfc02z9cru8bnxwf5z/feki.mp3?rlkey=57541lad0ahooyl4lyk2bhh09&dl=0',
        });
        realm.create('Category', {
          imgURL:
            'https://dl.dropboxusercontent.com/scl/fi/lgnqar4h777m4yp4a8ypq/shapes_new.png?rlkey=milpqsnkx3ilwhlpt21etkqjm&dl=0',
          categoryNameKU: 'formên geometrîk',
          categoryName: 'shapes',
          categoryAudio:
            'https://dl.dropboxusercontent.com/scl/fi/ikuhuzswytxal8b98nof2/formen_geometrik.mp3?rlkey=z3009v6gx4f2ia4o0gnoc02ay&dl=0',
        });

        console.log('create category called');
      });
    } catch (error) {
      console.error('An error occurred during the write transaction:', error);
    }
  }, [realm]);

  const deleteData = () => {
    realm.write(() => {
      realm.delete(words);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={data}>
          <Text style={styles.buttonText}>Add new word</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createCategories}>
          <Text style={styles.buttonText}>Add new category</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {isSureToDelete ? (
          <View style={styles.doubleButtonContainer}>
            <TouchableOpacity style={styles.approveButton} onPress={deleteData}>
              <Text style={styles.buttonText}>Approve to delete all data</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsSureToDelete(false)}>
              <Text style={styles.cancelText}>Cancel action</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsSureToDelete(true)}>
            <Text style={styles.buttonText}>Delete all words</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  doubleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  approveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelText: {
    color: 'white',
    textAlign: 'center',
  },
});
