import React from 'react'
import styled from 'styled-components'

const SiteHeader = styled.div`
  background: #111111bf;
  color: #c73032;
  font-size: 3rem;
  padding: 30px;
  font-weight: bold;

  h1 {
    margin: 0;
  }
`

export default function Header() {
  return (
    <div>
      <SiteHeader>Dungeons & Dragons Classes</SiteHeader>
    </div>
  )
}
