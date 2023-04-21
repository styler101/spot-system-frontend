import React from "react";
import { ResponseData, DomainData } from "../protocols";
import { notEmptyStringOrDefault } from "@/app/utils/formatters";

class DataMapper {
  parserToDomain(data: ResponseData[]): DomainData[] {
    return data.map((element: ResponseData) => {
      let domainElement: DomainData = {
        id: notEmptyStringOrDefault(element.id),
        company: notEmptyStringOrDefault(element.company),
        price_jsx: null,
        thumbnail_jsx: <img src={element.thumbnail} />,
        user_id: notEmptyStringOrDefault(element.thumbnail),
      };

      domainElement.price_jsx = (
        <React.Fragment>
          {element.price > 0 ? `R$ ${element.price.toFixed(2)}` : "Free"}{" "}
        </React.Fragment>
      );
      return domainElement;
    });
  }
}

export default new DataMapper();
