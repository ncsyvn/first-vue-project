<template>
  <div class="hello">
    <!-- v-on: define các sự kiện, có thể viết tắt là :, ví dụ :value-->
    <!-- v-bind: define các attribute, có thể viết tắt là @, ví dụ @click -->
    <button v-on:click="demSo(10)">Click</button>
    <!-- Event modifier
        .once: Sự kiện chỉ thực hiện một lần
        .prevent 
        .capture
        .stop
        .self
    -->
    <button v-on:click="counter *= 2">Click to double</button>
    <button v-on:click.once="counter *= 2">Click to double once</button>
    <!-- v-on:key bắt sự kiện khi nhấn phím 
      .enter
      .tab
      .delete
      .esc
      .space
      .up
      .down
      .left
      .right
      hoặc mã ascii, có thể custom config mã phím. ex: Vue.config.keyCodes.f1 = 112
    -->
    <input type="text" v-on:keyup.enter="submitText()" v-model="inputText" />

    <!-- Trong cặp ngoặc kép có thể là biến hoặc biểu thức đơn giản liên quan đến biến đó
      chứ không phải đoạn javascipt bất kỳ (var a = 1 là die)  -->
    <p>
      counter = {{ this.counter }} => {{ counter > 1 ? 1001 : counter - 1 }}
    </p>
    <h1>{{ msg }}</h1>
    <h2>{{ message }} số {{ counter }}</h2>
    <h1 v-html="sayHello"></h1>
    <button v-bind:disabled="btnHeight">Click me to check v-bind</button>
    <button v-on:click="showAlert()">Click me to check v-on</button>

    <!-- v-model get value của option đã chọn, set value cho biến salary -->
    <select v-on:change="alertChooseSalary()" v-model="salary">
      <option value="Choose 15M">Choose 15M</option>
      <option value="Choose 1500$">Choose 1500$</option>
      <option value="Choose 46M">Choose 2500$</option>
    </select>

    <br />
    <button v-on:click="counter++">counter + 1</button>
    <button v-on:click="counter--">counter - 1</button>
    <!-- Hàm computed không có () => không thể truyền tham số -->
    <p>Kiểm tra chắn lẻ {{ checkDivide2 }}</p>

    <!-- v-bind:class={class: true/false} thêm/xóa class của thẻ-->
    <div class="flex">
      <button :class="{ red: isRed }" @click="isRed = !isRed"></button>
      <button :class="{ green: isGreen }" @click="isGreen = !isGreen"></button>
      <!-- hoặc list class <button :class="[red, green]" @click="isRed = !isRed"></button> -->
    </div>
    <br />

    <!-- style sau ghi đè style trước -->
    <p :style="[styleObject1, styleObject2]">Test list styles</p>

    <!-- Xử lý if else hoặc v-show (v-show thì vẫn render thẻ chỉ là bật hay tắt, còn v-if nếu false thì không gen thẻ luôn)-->
    <div>
      <p v-if="value == 1">value = 1</p>
      <p v-else-if="value == 2">value = 2</p>
      <p v-else-if="value == 3">value = 3</p>
      <p v-else>value = {{ value }}</p>
    </div>

    <!-- v-for -->
    <div>
      <ul>
        <li v-for="(item, index) in listLanguages" :key="index">
          {{ index }} - {{ item.name }} is {{ item.score }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello HVITer",
      counter: 0,
      sayHello: '<p style="color: red"> Hello HVITer </p>',
      btnHeight: true,
      salary: "",
      inputText: "",
      isRed: true,
      isGreen: true,
      value: 10,
      styleObject1: {
        fontSize: "10px",
        color: "red",
      },
      styleObject2: {
        fontSize: "30px",
        backgroundColor: "green",
      },
      // List có thể push, pop,...
      listLanguages: [
        { name: "Python", score: "10" },
        { name: "Java", score: "9" },
        { name: "C#", score: "10" },
      ],
    };
  },
  // computed sẽ thực hiện nhiều lần mỗi khi có tác động vào biến của nó, không tác động thì call cũng không chạy
  computed: {
    checkDivide2() {
      return this.counter % 2 == 0 ? "even" : "old";
    },
  },
  // methods sẽ thực hiện tính toán bất kì khi nào nó được gọi
  methods: {
    demSo(sub) {
      this.counter = this.counter + sub;
    },
    showAlert() {
      alert("alert nè");
    },
    alertChooseSalary() {
      alert(this.salary);
    },
    submitText() {
      var text = "Đã nhập: " + this.inputText;
      alert(text);
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  width: 80px;
  height: 40px;
}
.red {
  width: 40px;
  height: 40px;
  background-color: red;
}

.green {
  width: 40px;
  height: 40px;
  background-color: green;
}
</style>
