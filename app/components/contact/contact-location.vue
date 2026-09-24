
<template>
  <div />
</template>


<script setup lang="ts">
const {isDark} = useIsDark();
const bg_clr = computed(() => isDark.value ? '#1D1D1F' : '#101016');
const locations = [
  {
    title: "India (HQ)",
    time: "10:00 am - 7:00 pm IST",
    img: "/img/contact/contact-location-1.jpg",
    addressTitle: "Netbloom Studio",
    address: "Bhopal, Madhya Pradesh <br /> India",
    mapLink: "https://maps.google.com/?q=Bhopal,+Madhya+Pradesh,+India",
    email: "netblooms@studio.com",
  },
  {
    title: "Germany",
    time: "12:00 pm GMT+2",
    img: "/img/contact/contact-location-2.jpg",
    addressTitle: "Netbloom EU",
    address: "Duesseldorfer Strasse 181 <br /> 40545 Duesseldorf <br /> Germany",
    mapLink: "https://maps.google.com/?q=Duesseldorfer+Strasse+181+40545+Duesseldorf+Germany",
    email: "netblooms@studio.com",
  },
  {
    title: "United States",
    time: "9:00 am PST",
    img: "/img/contact/contact-location-3.jpg",
    addressTitle: "Netbloom US",
    address: "1758 Berkeley <br /> St. Santa Monica, CA 90404",
    mapLink: "https://maps.google.com/?q=1758+Berkeley+St+Santa+Monica+CA+90404",
    email: "netblooms@studio.com",
  },
];
</script>
