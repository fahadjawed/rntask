import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {Icon} from 'native-base';
import {useTheme} from '@react-navigation/native';
import {Metrix} from '../../config';
import {Button} from '../../components';

export const HomeScreen = (props) => {
  const {colors} = useTheme();
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  const updateTodoState = (updatedTodos) => {
    setTodos(updatedTodos);
  };
  const addTodo = () => {
    let oldTodos = [...todos];
    oldTodos.push({text: todoText, isUpdating: false, updatedText: todoText});
    setTodoText('');
    toggleModal();
    updateTodoState(oldTodos);
  };
  const removeTodo = (index) => {
    let oldTodos = [...todos];
    oldTodos.splice(index, 1);
    updateTodoState(oldTodos);
  };
  const updateTodo = (index) => {
    let oldTodos = [...todos];
    oldTodos[index] = {text: oldTodos[index].updatedText, isUpdating: false};
    updateTodoState(oldTodos);
  };
  const startUpdating = (index) => {
    let oldTodos = [...todos];
    oldTodos[index]['isUpdating'] = !oldTodos[index]['isUpdating'];
    oldTodos[index]['updatedText'] = oldTodos[index].text;

    updateTodoState(oldTodos);
  };
  const updateTodoText = (text) => {
    setTodoText(text);
  };
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };
  const updatingText = (index, text) => {
    let oldTodos = [...todos];
    oldTodos[index]['updatedText'] = text;
    updateTodoState(oldTodos);
  };
  const keyExtractor = (item, index) => index.toString();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={todos}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: colors.card,
                padding: Metrix.HorizontalSize(20),
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: colors.border,
                marginTop: Metrix.VerticalSize(5),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {item.isUpdating ? (
                <>
                  <TextInput
                    defaultValue={item.text}
                    style={{
                      width: '50%',
                      color: colors.text,
                      borderWidth: 0.5,
                      borderColor: colors.border,
                      marginVertical: Metrix.VerticalSize(20),
                      textAlignVertical: 'top',
                      paddingLeft: Metrix.HorizontalSize(10),
                    }}
                    selectionColor={colors.text}
                    multiline={true}
                    placeholder={'Todo...'}
                    placeholderTextColor={colors.text}
                    onChangeText={(text) => {
                      updatingText(index, text);
                    }}
                  />
                  <Button
                    height={40}
                    width={40}
                    rounded
                    color={colors.primary}
                    isDisabled={!item.updatedText.length}
                    onPress={() => {
                      updateTodo(index);
                    }}
                    icon={'md-checkmark'}
                  />
                  <Button
                    height={40}
                    width={40}
                    rounded
                    color={colors.notification}
                    onPress={() => startUpdating(index)}
                    icon={'close'}
                  />
                </>
              ) : (
                <>
                  <Text style={{color: colors.text, width: '50%'}}>
                    {item.text}
                  </Text>
                  <Button
                    height={40}
                    width={40}
                    rounded
                    color={colors.primary}
                    onPress={() => {
                      startUpdating(index);
                    }}
                    icon={'pencil'}
                  />

                  <Button
                    height={40}
                    width={40}
                    rounded
                    color={colors.notification}
                    onPress={() => {
                      removeTodo(index);
                    }}
                    icon={'trash'}
                  />
                </>
              )}
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          height: Metrix.HorizontalSize(50),
          width: Metrix.HorizontalSize(50),
          backgroundColor: colors.notification,
          position: 'absolute',
          bottom: 5,
          right: 10,
          borderRadius: Metrix.HorizontalSize(25),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={Metrix.ActiveOpacity}
        onPress={toggleModal}>
        <Icon
          name={'add'}
          style={{color: colors.text, fontSize: Metrix.customFontSize(40)}}
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisibility}
        transparent
        onRequestClose={toggleModal}
        animationType={'slide'}>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: Metrix.VerticalSize(),
              width: Metrix.HorizontalSize(),
              backgroundColor: colors.BlackOpacity(0.5),
              justifyContent: 'flex-end',
            }}
            onPress={toggleModal}>
            <TouchableOpacity
              style={{
                height: '40%',
                backgroundColor: colors.card,
                borderTopLeftRadius: Metrix.Radius,
                borderTopRightRadius: Metrix.Radius,
              }}>
              <TextInput
                autoFocus
                style={{
                  color: colors.text,
                  height: '50%',
                  borderWidth: 0.5,
                  borderColor: colors.border,
                  marginVertical: Metrix.VerticalSize(20),
                  textAlignVertical: 'top',
                  width: '90%',
                  alignSelf: 'center',
                  paddingLeft: Metrix.HorizontalSize(10),
                }}
                placeholderTextColor={colors.text}
                placeholder={'Todo..'}
                multiline
                selectionColor={colors.text}
                onChangeText={updateTodoText}
              />
              <View style={{alignSelf: 'center'}}>
                <Button
                  height={40}
                  width={100}
                  disabled={!todoText.length}
                  color={colors.notification}
                  onPress={addTodo}
                  text={'Add'}
                />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};
