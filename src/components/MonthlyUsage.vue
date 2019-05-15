<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Monthly Usage</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Water Used (Gallons)</th>
            <th scope="col">Monthly Comparison</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="tableRow in data" v-bind:key="tableRow.id">
            <td>{{tableRow.month}} 2019</td>
            <td>{{tableRow.usage}}</td>
            <td>{{tableRow.change}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthlyUsage',
  props: {
    data: Array
  }
};
</script>