# 🚀 TANSTACK VIRTUAL

### Installation

```bash
bun add @tanstack/react-virtual
```

### Implementation

```JSX
const { data } = useQuery(retrieveJobQuery());

const scrollRef = useRef<HTMLDivElement>(null);

// Setting up the virtualizer
const virtualizer = useVirtualizer({
    count: data.length,
    estimateSize: () => 200, // Height of data containing
    getScrollElement: () => scrollRef.current,
});

const virtualItems = virtualizer.getVirtualItems();

return (
    // Esure this element is scrollable
    <div ref={scrollRef} className='overflow-auto h-[90dvh] w-[90dvh]'>
        <div className='relative' >
            <div
                className='absolute top-0 left-0 w-full'
                style={{
                    transform: `translateY(${virtualItems[0].start}px)`,
                }}
            >
                {virtualItems.map(({ index, key }) => {
                    const card = data[index];
                    return (
                        <div
                            className='absolute top-0 left-0 my-3'
                            key={key}
                            data-index={index}
                            ref={virtualizer.measureElement}
                        >
                            <Card data={card} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);

```
