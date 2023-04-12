import { Pagination, Typography } from "@mui/material";
import styled from "styled-components";
import { CATEGORIES } from "../../models/models";
import ProductsListingItem from "../products-listing-item/ProductsListingItem";
import { useState } from "react";
import { filterByCategorie } from "../../utils/utils";

const ProductsListingContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  margin-top: 32px;
`;

const ProductsListingContainerTitle = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

const ProductsListingContainerItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 48px;
  margin-bottom: 36px;
`;

const ProductsListing = (props: {
  selectedCategorie: CATEGORIES;
  categorieLabel: string;
}) => {
  // Logic for pagination
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const productsData = filterByCategorie(props.selectedCategorie);

  const postsPerPage = 5;
  const paginateNumber = Math.ceil(productsData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsData.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setPage(value);
  };
  return (
    <ProductsListingContainer>
      <ProductsListingContainerTitle variant="h6">
        {props.categorieLabel.toUpperCase()}
      </ProductsListingContainerTitle>
      <ProductsListingContainerItems>
        <ProductsListingItem productsData={currentPosts} />
      </ProductsListingContainerItems>
      <Pagination count={paginateNumber} page={page} onChange={handleChange} color="primary"/>
    </ProductsListingContainer>
  );
};

export default ProductsListing;
