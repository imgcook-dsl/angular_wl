import {Component, OnDestroy, OnInit} from '@angular/core';
import { fetch } from 'whatwg-fetch';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit,OnDestroy {

  stateData: 'test';
  loopData: [
    {
      title: '小户型卫浴怎样才能装得高大上？',
      coverImage:
        'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
      readCount: 200,
      user: {
        userImage:
          'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
        userName: '时尚家居'
      },
      url: 'https://www.imgcook.com'
    },
    {
      title: '拥有超多功能的40平米简约小公寓了解一下',
      coverImage:
        'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
      readCount: 500,
      user: {
        userImage:
          'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
        userName: '花花设计工作'
      },
      url: 'https://www.imgcook.com/docs'
    }
  ];
  constants: {}

  constructor() { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isReadCountShow(readCount) {
    return readCount > 300;
  }

  fetch_example() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
      body: {}
    })
      .then(response => response.json())
      .then((data) => {
        console.log(this.dataHandler);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }

  dataHandler(dataMap) {
    console.log('dataHandler 11');
    return dataMap;
  }

  handleClick_1(e) {
    window.open(e.url);
  }

}