import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // json文本框显示行数
  rows = 20;
  // json文本框值
  jsonValue = '';
  errorMessage = '';
  successMessage = '';

  constructor() {}

  // 格式化
  format() {
    const jsonFormat = require('json-format');
    /* using indent with spaces */
    const config = {
      type: 'space',
      size: 2
    };
    try {
      this.jsonValue = jsonFormat(JSON.parse(this.jsonValue), config);
      this.errorMessage = '';
      this.successMessage = '格式化完成';
    } catch (error) {
      this.successMessage = '';
      this.errorMessage = error.message;
    }
  }

  // 复制
  copy() {
    const clipboard = require('copy-to-clipboard');
    clipboard(this.jsonValue);
    this.errorMessage = '';
    this.successMessage = '复制完成';
  }

  // 保存文件
  save() {
    const file = 'reallyEasy.json';
    var FileSaver = require('file-saver');
    var file = new File(this.jsonValue, file, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  // 清空
  clear() {
    this.jsonValue = '';
    this.ionFocus();
  }

  // json 输入值变更
  ionFocus() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}
