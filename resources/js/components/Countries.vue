<template>
    <div>
        <h2>Countries</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [],
            country: {
                id: "",
                name: "",
                area: "",
                population: "",
            },
        };
    },
};
</script>
