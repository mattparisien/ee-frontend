import React from 'react'
import { QuarterNote, HalfNote, DoubleNote } from '../../../Vector/Notes';

function Notes() {
  return (
    <>
    				<QuarterNote id={1} />
						<QuarterNote id={2} />
						<QuarterNote id={4} />
						<HalfNote id={3} />
						<DoubleNote id={5} />
    </>
  )
}

export default Notes