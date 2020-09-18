import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-json',
  templateUrl: 'json.page.html',
  styleUrls: ['json.page.scss'],
})
export class JsonPage {
  // json文本框显示行数
  rows = 20;
  // json文本框值
  jsonValue = '';
  errorMessage = '';
  successMessage = '';

  constructor() {}

  // 格式化
  format() {
    if(this.nullCheck()) return;
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
    if(this.nullCheck()) return;
    const clipboard = require('copy-to-clipboard');
    clipboard(this.jsonValue);
    this.errorMessage = '';
    this.successMessage = '复制完成';
  }

  // 保存文件
  save() {
    if(this.nullCheck()) return;
    const datetime = formatDate(Date.now(), 'MMddHHmmss', 'zh');
    const fileName = 'reallyEasy_' + datetime + '.json';
    const FileSaver = require('file-saver');
    const file = new File([this.jsonValue], fileName, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  // 清空
  clear() {
    if(this.nullCheck()) return;
    this.jsonValue = '';
    this.ionFocus();
  }

  // json 输入值变更
  ionFocus() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  // 空 check
  nullCheck() {
    if (this.jsonValue.trim() === '') {
      this.successMessage = '';
      this.errorMessage = '请输入需要转换的json字符串!';
      return true;
    }
    return false;
  }
}
