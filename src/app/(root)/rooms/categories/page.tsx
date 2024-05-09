import React from "react";
import RoomCategoryCard from "./RoomCategoryCard";
import {
  deluxeFeatures,
  standardFeatures,
  vipFeatures,
} from "@/src/utils/data";

export default function RoomCategories() {
  return (
    <main className='p-10'>
      <h1 className='text-4xl font-bold text-violet'>
        Discover Your Perfect Stay
      </h1>
      <section className='grid md:grid-cols-3 gap-10 my-5'>
        <RoomCategoryCard
          category='Standard'
          id={"65622b3a1ef2e55f87d029aa"}
          imageUrl='/img/standard.jpg'
          features={standardFeatures}
        />
        <RoomCategoryCard
          category='Deluxe'
          id={"656235911ef2e55f87d029ab"}
          imageUrl='/img/deluxe.jpg'
          features={deluxeFeatures}
        />
        <RoomCategoryCard
          category='VIP'
          id={"656238641ef2e55f87d029ac"}
          imageUrl='/img/vip.jpg'
          features={vipFeatures}
        />
      </section>
    </main>
  );
}
