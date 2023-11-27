<template>
  <div class="row px-4">
    <div class="col">
      <h2>Monthly Usage</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Water Used</th>
            <th scope="col">Monthly Comparison</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="tableRow in data" v-bind:key="tableRow.id">
            <td>{{tableRow.month}}</td>
            <td>{{tableRow.usage}} Gallons</td>
            <td>{{tableRow.change}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthlyUsage",
  props: {
    data: Array
  }
};
</script>