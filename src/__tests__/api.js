import React from 'react';
import * as api from '../api';
import AvatarSelector from '../components/AvatarSelector';
//import PropTypes from 'prop-types';
//import PropTypes from '../prop-types';
import { mount } from 'enzyme';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

test('should get user from localStorage', () => {
  const persona = 'Steffe';
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});

test('should get posts from localStorage', () => {
    const post = api.createPostObject('faketitle', 'fakecontent', 'fakeauthor');
    expect(post.title).toBe('faketitle')
    api.storePostObject([post]);
    const fetchPost = api.fetchAllPosts();
    expect(fetchPost[0].title).toBe('faketitle');
    
  /*
  const persona = 'Steffe';
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
  */
});



test('Should find avatar', ()=> {
  const findAvatar = mount (<AvatarSelector />)
  //wrapper = shallow 
  expect(findAvatar.find('img')).toHaveLength(1);
});

    
/*
describe(' avatarSelector component', () => {
  describe('Check propTypes', () => {
    test('should pass', () => {
      const expectedProps = {
        currentpersona: 'string'
      };
    });
  });
});


//expect(wrapper.find(Button)).toHaveLength(2);

*/