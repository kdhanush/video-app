import React, { useState } from "react";
import Card from "../Card/Card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Playlist({ videoData }) {

  const [updatedvideos, setUpdatedVideos] = useState(videoData)
  const handleOnDragEnd = (result) => {
    // TODO: Handle reordering of items if necessary
    const items = Array.from(updatedvideos)
    const [reorderItem] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0, reorderItem)

    setUpdatedVideos(items)

  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="videos">
          {(provided) => (
            <div
              className="flex flex-col h-[850px] overflow-auto gap-4 p-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {updatedvideos.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        customClassName={
                          "transition duration-500 ease-in-out hover:scale-105"
                        }
                        id={item.id}
                        image={item.thumb}
                        title={item.title}
                        subtitle={item.subtitle}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Playlist;
