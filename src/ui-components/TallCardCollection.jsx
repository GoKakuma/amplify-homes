/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TallCard from "./TallCard";
import { Collection } from "@aws-amplify/ui-react";
export default function TallCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.price(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TallCardCollection")}
    >
      {(item, index) => (
        <TallCard
          home={item}
          height="auto"
          width="400px"
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TallCard>
      )}
    </Collection>
  );
}
