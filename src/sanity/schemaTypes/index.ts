import { type SchemaTypeDefinition } from 'sanity'


import { landingPage } from './landingPage'
import { featuredPostSection } from './landingPage-section/featuredPost-section'
import { popularDestinationSection } from './landingPage-section/popularDestinationSection'
import { featuredDestination } from './landingPage-section/featuredDestination'
import { aboutBlogSection } from './landingPage-section/aboutBlog-section'
import { comment } from './comments'
import { blogPage } from './blog'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, featuredPostSection, popularDestinationSection, featuredDestination, aboutBlogSection, comment , blogPage]
}











